import "./Message.css"

function Message() {
  return (
    <div className="message" >
      <a style={{padding:"50px"}} href="sms:+916398872927">Send SMS</a>
      <a style={{padding:"50px"}}  href="sms:+916398872927?body=Hello, I'm interested in your services">Send SMS</a>

    </div>
  )
}

export default Message
