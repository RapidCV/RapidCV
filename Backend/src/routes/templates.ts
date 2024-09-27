import {  Router } from 'express';
export const template = Router();

template.get("/fetch_all",(req,res)=>{
    const sample_template = [
        { id: 1, title: "Professional", description: "Clean and polished for corporate environments", image: "/" },
        { id: 2, title: "Creative", description: "Showcase your artistic flair and innovation", image: "/" },
        { id: 3, title: "Modern", description: "Sleek design for contemporary job seekers", image: "/" },
        { id: 4, title: "Simple", description: "Minimalist approach for a straightforward impact", image: "/" },
        { id: 5, title: "Executive", description: "Sophisticated layout for senior positions", image: "/" },
        { id: 6, title: "Technical", description: "Highlight your skills and projects effectively", image: "/" },
      ]
    res.json({
        data:sample_template
    })


})