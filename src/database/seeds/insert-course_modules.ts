import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("course_modules").insert([
        { course_id: 3, name: "React Components & State Management" },
        { course_id: 4, name: "Node.js & Express.js Basics" },
        { course_id: 5, name: "SQL Queries & Database Design" },
        { course_id: 6, name: "Python for Web Scraping & Automation" },
        { course_id: 7, name: "TypeScript & Static Typing" },
        { course_id: 8, name: "Building & Consuming RESTful APIs" },
        { course_id: 9, name: "Version Control with Git & GitHub" },
        { course_id: 10, name: "Cybersecurity Best Practices for Developers" }
    ]);
};
