import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("courses").insert([
        { name: "HTML & CSS" },
        { name: "JavaScript" },
        { name: "React.js" },
        { name: "Node.js & Express.js" },
        { name: "SQL & Database Management" },
        { name: "Python for Web & Data Science" },
        { name: "TypeScript" },
        { name: "API Development & RESTful Services" },
        { name: "Git & GitHub" },
        { name: "Cybersecurity for Developers" }
    ]);
};
