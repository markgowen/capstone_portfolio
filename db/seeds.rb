Project.destroy_all
Employer.destroy_all
User.destroy_all

User.create!(username: "admin", password: "password", password_confirmation: "password")

Project.create!(name: "Project 1", user_id: User.first.id, desc: "This is a description of project 1", frameworks: "React", website: "", github: "")
