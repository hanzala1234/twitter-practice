import React from 'react'
import './index.css'
class App extends React.Component{
    render(){
        return(
        <div >
        <div className="wrapper">         
        <Header />
        </div>
            <Main />
        </div>
        );
    }
}
class Main extends React.Component{
 render(){
     return (
<div className="main-div">
<LeftDiv/>
 <Middle/>
<div className="right-div">
<div className="upper-right-div">
<div className="fixed-right-div">
<img src="img/profile.jpg" class="profile"/>
<div className="identity">
<h4>Hanzala Farooq</h4>
<p>@hanzalafarooq1</p>

</div>
<ul> <li>Tweets</li> <li>30</li></ul>
<ul> <li>Following</li> <li>18</li></ul>
<ul> <li>Followers</li> <li>30</li></ul>

</div>
</div>
<div className="lower-right-div">
<h4> Trends For Today</h4> <a id="tweet-color">Change</a>
<div className="trend">
<h id="tweet-color">#GilgitBhuttoKa</h>
<v> 46.5K tweets</v>
</div>
<div className="trend">
<h id="tweet-color">#HajiAbdulWahab</h>
<v> 5,644 tweets</v>
</div>
<div className="trend">
<h id="tweet-color">Hasan ali</h>
<v> 3960 tweets</v>
</div>
<div className="trend">
<h id="tweet-color">#JersyKnowsNoGender</h>
<v> 1,263 tweets</v>
</div>
<div className="trend">
<h id="tweet-color">Misbah</h>
<v> 1,006 tweets</v>
</div>
<div className="trend">
<h id="tweet-color">PAKvsNZ</h>
<v>  </v>
</div>
<div className="trend">
<h id="tweet-color">PrimeMinisterImranKhan</h>

<v>  </v>
</div>
</div>
</div>

</div>
 );
 }}
 class LeftDiv extends React.Component{
   render(){
       return(
           <div className="left-div">
           
        <h4>Who To Follow</h4>
        <a id="tweet-color">Refrest</a> <a id="tweet-color">view all</a>
           <div className="suggestion">
           
           <img src="img/azhar.jpg" className="profile"/>
           <h3> Azhar Ali</h3>
           <h5>@AzharAli_521</h5>
           <img src="img/close.png" id="close"/>
           <button> Follow</button>
           
           </div>
           <div className="suggestion">
           
           <img src="img/amir.jpg" className="profile"/>
           <h3> Muhammad Amir</h3>
           <h5>@ia_amir</h5>
           <img src="img/close.png" id="close"/>
           <button> Follow</button>
           
           </div>
           <div className="suggestion">
           
           <img src="img/afridi.jpg" className="profile"/>
           <h3> Shahid Afridi</h3>
           <h5>@SA_ridi</h5>
           <img src="img/close.png" id="close"/>
           <button> Follow</button>
           
           </div>
           <p id="tweet-color" > Find people you know</p>
           <div className="lower-left-div">
           <p>2018 Twitter Help Center Terms 
           <br/>
           privacy policy cokkies  Ads info  Brand Blog <br/>
           status apps jobs  Marketing business
           </p>
           </div>
           <div className="lower-left-div tweet-color" id="custom">
           <p > Advertise with twitter</p>

           </div>
           </div>
       );
   }
 }
 class Middle extends React.Component{
  constructor(){
      super();
      this.state={
          tweet:"",
          tweetStack:[]
      }
  }
  setTweet=(tweet)=>{

  this.setState({
       tweet: tweet,
       
  });
  }
  setTweetStack=(tweet,tweetStack)=>{
      
   const a=tweetStack;
   a.push(tweet);
    this.setState({tweetStack:a,tweet:""});
  }
  
    render(){
    
    return(
    <div className="middle">

 <div className="tweet-composer">
 <img src="img/profile.jpg" className="profile"/>
 <Tweet_Field tweetChange={this.setTweet} myValue={this.state.tweet}/>
<Tweet_Button tweet={this.state.tweet} tweetStack={this.state.tweetStack} onTweet={this.setTweetStack}/>

 <img src="img/gallery-icon.png" id="gallery"/>
</div>
<Tweet  tweets={this.state.tweetStack}/>  
    </div>);
}

 }
 class Tweet_Button extends React.Component{
     render(){
return(
 <button id="something" onClick={()=>{
    const  tweet_stack = this.props.tweetStack;
    const tweet=this.props.tweet;
    if(tweet.length>0){
        
     this.props.onTweet(tweet,tweet_stack);
     
    }
     
     
 }} >Tweet</button>);

     }
 }
 class Tweet_Field extends React.Component{
     
    render(){
         return(
<textarea placeholder="What's happening"  rows={1} maxLength={120} minLength={20} value={this.props.myValue} onFocus={(evt)=>
    {evt.target.rows=4;
        document.getElementById("something").style.display="block";
        evt.target.parentNode.querySelectorAll('img')[1].style.display='none';
         
    }} 
    onBlur={ (evt)=>{
        if(evt.target.value.length==0){
        evt.target.rows=1;
       
        document.getElementById("something").style.display="none";
        }
    }}
    onChange={(evt)=>{

this.props.tweetChange(evt.target.value);
}}
    
    />
         );
     }
 }
 class Tweet extends React.Component{
render(){
    const month=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct"
,"Nov","Dec"];
    return(
        <div>
{this.props.tweets.map((value,index)=>{
return(
    <div className="tweet">
    <img src="img/profile.jpg" className="profile"/>
    <div className="main-tweet">
    {console.log(new Date())}
    <h4>Muhammad Hanzala</h4><h5>@Hanzala_farooq</h5><h5>{new Date().getDate()}{month[new Date().getMonth()]}{new Date().getYear()-100}</h5>
    <p>{value}</p>
    <div className="feedback">
    <span>
  <img src="img/chat.PNG"/> 1
  </span>
  <span>
  <img src="img/heart.PNG"/> 2
  </span>
  <span>
  <img src="img/retweet.PNG"/> 3 </span>
  <span>
  <img src="img/dm.PNG"/> 3 </span>
  </div>
    </div>
      
    </div>
);

})}
  </div>
    );
}

 }
class Header extends React.Component{

     render(){
         return(
            
         <div className="header">
         
          <a href=""><img src='/img/home.png' />Home</a>
          <a href=""><img src= '/img/notification.png' />Notification</a>
          <a href=""><img src='img/message.png'/>Messages</a>
          <div className="header-logo">
          <img src={window.location.origin + '/img/icon.png'} />
          </div>
          <input type="text" placeholder="Search twitter"/>
            <img src="img/profile.jpg" className="profile" />
            <button >Tweet</button>

         </div>);
     }
}

export default App;