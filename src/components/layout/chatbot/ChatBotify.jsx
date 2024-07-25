import React from 'react';
import ChatBot from 'react-chatbotify';
import logo from '../../../assets/logo.svg'

const ChatBotify = () => {
    const [form, setForm] = React.useState({});

    const settings ={
        general:{
            showFooter: false
        },
        header:{
            title: "TestSolz",
            avatar: logo

        },
        chatHistory:{
            disabled:true
        }
    }

    const style = {
        chatInputAreaDisabledStyle:{

        }
    }

    const flow = {
        start: {
            message: "Hello! Welcome to TestSolz. What's your name?",
            function: (params) => setForm({ ...form, name: params.userInput }),
            path: "ask_company"
        },
        ask_company: {
            message: (params) => `Nice to meet you, ${params.userInput}. What is your company's name?`,
            function: (params) => setForm({ ...form, company: params.userInput }),
            path: "ask_email"
        },
        ask_email: {
            message: "Please provide your email address so we can contact you.",
            function: (params) => setForm({ ...form, email: params.userInput }),
            path: "ask_project_type"
        },
        ask_project_type: {
            message: "What type of software testing service are you interested in?",
            options: ["Functional Testing", "Performance Testing", "Security Testing", "Automation Testing", "Manual Testing", "Usability Testing"],
            chatDisabled: true,
            function: (params) => setForm({ ...form, projectType: params.userInput }),
            path: "ask_project_details"
        },
        ask_project_details: {
            message: "Could you please provide a brief description of your project and testing needs?",
            function: (params) => setForm({ ...form, projectDetails: params.userInput }),
            path: "ask_timeline"
        },
        ask_timeline: {
            message: "What is your expected timeline for the testing?",
            options: ["1-2 weeks", "1 month", "3 months", "More than 3 months"],
            chatDisabled: true,
            function: (params) => setForm({ ...form, timeline: params.userInput }),
            path: "ask_budget"
        },
        ask_budget: {
            message: "What is your estimated budget for this testing project?",
            options: ["Less than $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "More than $20,000"],
            chatDisabled: true,
            function: (params) => setForm({ ...form, budget: params.userInput }),
            path: "end"
        },
        end: {
            message: "Thank you for providing the details. We will contact you shortly!",
            render: (
                <div>
                    <p>Name: {form.name}</p>
                    <p>Company: {form.company}</p>
                    <p>Email: {form.email}</p>
                    <p>Project Type: {form.projectType}</p>
                    <p>Project Details: {form.projectDetails}</p>
                    <p>Timeline: {form.timeline}</p>
                    <p>Budget: {form.budget}</p>
                </div>
            ),
            options: ["Start a New Inquiry"],
            chatDisabled: true,
            path: "start"
        }
    };

    return (
        <div>
            <ChatBot flow={flow} settings={settings} />
        </div>
    );
};

export default ChatBotify;
