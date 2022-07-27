interface IMailTo{
    name: string;
    email: string
}

interface IMailMessage{
    subject: string;
    body: string;
    attachment?: string[]; //nesse caso é um array por isso é dessa forma
}

class EmailService{
    sendMail(to: IMailTo, message: IMailMessage){
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;