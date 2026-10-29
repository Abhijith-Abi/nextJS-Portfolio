import { CONTACT, SITE_URL } from "./site";

/**
 * WebMCP imperative tools (Chrome early preview), registered site-wide from
 * an inline script in the root layout's <head>, so they exist as soon as the
 * HTML is parsed and persist across client-side navigation (the layout never
 * unmounts). No-op in browsers without `navigator.modelContext`.
 *
 * FAQ search, new questions and the contact form are declarative form tools
 * on the homepage (FAQSection, ContactSection); those always run through the
 * visible forms.
 */

const SECTIONS = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "testimonials",
    "contact",
    "faq",
];

const SERVICES = [
    { name: "Custom Web Development", path: "/services/web-development" },
    { name: "Enterprise Software Engineering", path: "/services/software-development" },
    { name: "Full Stack React & Django", path: "/services/full-stack-development" },
    { name: "Next.js Development", path: "/services/nextjs-development" },
    { name: "AI & LLM Integration", path: "/services/ai-development" },
    { name: "Custom ERP Systems", path: "/services/erp-development" },
    { name: "SaaS Product Architecture", path: "/services/saas-development" },
];

const DATA = {
    contact: {
        name: "Abhijith P A — Abi Solutions",
        email: CONTACT.email,
        phone: CONTACT.phoneDisplay,
        whatsapp: CONTACT.whatsapp,
        location: `${CONTACT.location} · remote worldwide`,
        replyTime: "Usually within 24 hours",
        contactPage: `${SITE_URL}/contact`,
    },
    services: SERVICES.map((s) => ({ name: s.name, url: `${SITE_URL}${s.path}` })),
    sections: SECTIONS,
};

/** JSON that is safe to embed inside a <script> element. */
const json = (value: unknown) =>
    JSON.stringify(value).replace(/</g, "\\u003c");

export const WEBMCP_SCRIPT = `(function(){
var mc=navigator.modelContext||document.modelContext;
if(!mc||typeof mc.registerTool!=="function")return;
var D=${json(DATA)};
var tools=[{
name:"get_contact_details",
description:"Get the ways to contact Abhijith P A (Abi Solutions): email, phone, WhatsApp, location and usual reply time.",
inputSchema:{type:"object",properties:{}},
annotations:{readOnlyHint:true},
execute:function(){return JSON.stringify(D.contact);}
},{
name:"list_services",
description:"List the software development services offered by Abi Solutions, each with a page that has more detail.",
inputSchema:{type:"object",properties:{}},
annotations:{readOnlyHint:true},
execute:function(){return JSON.stringify(D.services);}
},{
name:"go_to_section",
description:"Show one section of the homepage (about, skills, projects, experience, testimonials, contact or FAQ). Opens the homepage first when needed.",
inputSchema:{type:"object",properties:{section:{type:"string",enum:D.sections,description:"Homepage section to show."}},required:["section"]},
execute:function(input){
var id=String((input&&input.section)||"");
if(D.sections.indexOf(id)<0)return "Unknown section \\""+id+"\\". Use one of: "+D.sections.join(", ")+".";
var el=location.pathname==="/"&&document.getElementById(id);
if(el){el.scrollIntoView({behavior:"smooth",block:"start"});return "Scrolled to the "+id+" section.";}
location.href="/#"+id;return "Opening the homepage at the "+id+" section.";
}
}];
tools.forEach(function(tool){
try{Promise.resolve(mc.registerTool(tool)).catch(function(e){console.warn("WebMCP: "+tool.name+" not registered",e);});}
catch(e){console.warn("WebMCP: "+tool.name+" not registered",e);}
});
})();`;
