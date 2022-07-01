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
    }).then((res)=>showfunction(res.data));
        // localStorage.setItem(`userDetails${document.getElementById('email').value}`,JSON.stringify(datat));
        location.reload();
}
axios({
    method:'get',
    url:'https://crudcrud.com/api/62e0228592bd4c2fa98b46965328a40b/booking_data',
}).then((res)=> showfunction(res.data));

function showfunction(res)
{
    for(let i=0;i<res.length;i++)
    {
        let data=document.createElement('li');
        data.innerHTML=`<li>${res[i].name}-----${res[i].email}--<button>Delete</button>-<button>Edit</button></li>`
        document.getElementById('showdata').appendChild(data);
    }


}
