import {NextResponse} from "next/server";
export async function POST(req:Request){
 try{
  const {name,email,subject,message}=await req.json();
  if(!name||!email||!subject||!message||String(message).length<10) return NextResponse.json({error:"Please complete all fields."},{status:400});
  const key=process.env.RESEND_API_KEY, to=process.env.CONTACT_TO_EMAIL, from=process.env.CONTACT_FROM_EMAIL;
  if(!key||!to||!from) return NextResponse.json({error:"Contact delivery is not configured yet. Please email me directly."},{status:503});
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from,to,reply_to:email,subject:`Portfolio: ${subject}`,text:`From: ${name} <${email}>\n\n${message}`})});
  if(!response.ok) return NextResponse.json({error:"Email provider could not send the message."},{status:502});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"Invalid request."},{status:400});}
}
