import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  const price=[
    {
      state:"FREE",
      rate:"$0 ",
      dur:"/month",
      features:[
        {name:"👍Single user",
         enable:true},
        {name:"👍5GB Storage",
        enable:true},
        {name:"👍Unlimited Public Projects",
        enable:true},
        {name:"👍Community Access",
        enable:true},
        {name:"👎Unlimited Private Projects",
        enable:false},
        {name:"👎Dedicated Phone Support",
        enable:false},
        {name:"👎Free Subdomain",
        enable:false},
        {name:"👎Monthly Status Reports",
        enable:false}
      ]
    },
    {
      state:"PLUS",
      rate:"$9 ",
      dur:"/month",
      features:[
        {name:"👍5 user",
         enable:true},
        {name:"👍50GB Storage",
        enable:true},
        {name:"👍Unlimited Public Projects",
        enable:true},
        {name:"👍Community Access",
        enable:true},
        {name:"👍Unlimited Private Projects",
        enable:true},
        {name:"👍Dedicated Phone Support",
        enable:true},
        {name:"👍Free Subdomain",
        enable:true},
        {name:"👎Monthly Status Reports",
        enable:false}
      ]
    },
    {
      state:"PRO",
      rate:"$49 ",
      dur:"/month",
      features:[
        {name:"👍Unlimited user",
         enable:true},
        {name:"👍150GB Storage",
        enable:true},
        {name:"👍Unlimited Public Projects",
        enable:true},
        {name:"👍Community Access",
        enable:true},
        {name:"👍Unlimited Private Projects",
        enable:true},
        {name:"👍Dedicated Phone Support",
        enable:true},
        {name:"👍Unlimited Free Subdomain",
        enable:true},
        {name:"👎Monthly Status Reports",
        enable:false}
      ]
    }
  ]

  return (
    <section class="pricing py-5">
    <div className='container'>
      <div className='row'>
            {price.map((ele)=><Card props={ele}></Card>)}
      </div>
    </div>
    </section>
  );
}

function Card({props}){
  return(
    <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
    <div className="card-body">
    <h5 className="card-title text-muted text-uppercase text-center">{props.state}</h5>
    <h6 className="card-price text-center">{props.rate}<span className="period">{props.dur}</span></h6>
    <hr></hr>
    <ul className="fa-ul">
      {props.features.map((e)=>
      {return <li className={e.enable ? " " : "text-muted"}>
        <span className="fa-li"><i className="fas fa-check"></i></span>{e.name}
        </li>
      })}
    </ul>
    <div className="d-grid">
      <a href="#" className="btn btn-primary text-uppercase">BUTTON</a>
    </div>
    </div>
    </div>
    </div>
  );
}
