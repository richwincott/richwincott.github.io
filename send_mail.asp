<%
Set Mail = CreateObject("CDO.Message")

'This section provides the configuration information for the remote SMTP server.

'Send the message using the network (SMTP over the network).
Mail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2

Mail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpserver") ="smtp.live.com"
Mail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 25

'Use SSL for the connection (True or False)
Mail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = True

Mail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = 60

'If your server requires outgoing authentication, uncomment the lines below and use a valid email address and password.
'Basic (clear-text) authentication
Mail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
'Your UserID on the SMTP server
Mail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendusername") ="rich_wi@hotmail.com"
Mail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendpassword") ="Sarahjones1"

Mail.Configuration.Fields.Update

'End of remote SMTP server configuration section

Mail.Subject="Website Message | richardwincott.co.uk"
Mail.From="no-reply@richardwincott.co.uk"
Mail.To="rich.wincott@gmail.com"
Mail.HTMLBody="<center><br/><h2>Website Message!</h2><h4>richardwincott.co.uk</h4></center>From=" + Request.Form("email") + "<br/>Subject=" + Request.Form("subject") + "/" + Request.Form("other") + "<br/><br/>Body=" + Request.Form("message")

Mail.Send
Set Mail = Nothing

Response.Redirect("../content/thank_you.html")
%> 