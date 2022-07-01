let data=document.getElementById('formbox');
console.log(data);


class datas
{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
}



data.addEventListener('submit',xyz);
function xyz(e)
{
    e.preventDefault();
    
    console.log(document.getElementById('email').value,document.getElementById('name').value);
    let datat=new datas(document.getElementById('name').value,document.getElementById('email').value);

    axios({
        method:'post',
        url:'https://crudcrud.com/api/62e0228592bd4c2fa98b46965328a40b/booking_data',
        data:datat
    }).then((res)=>console.log(res))
        // localStorage.setItem(`userDetails${document.getElementById('email').value}`,JSON.stringify(datat));
        // location.reload();
}
axios({
    method:'get',
    url:'https://crudcrud.com/api/62e0228592bd4c2fa98b46965328a40b/booking_data'
}).then((res)=>console.log(res));
