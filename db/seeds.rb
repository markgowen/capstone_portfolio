Project.destroy_all
Employer.destroy_all
User.destroy_all

User.create!(username: "admin", password: "password", password_confirmation: "password")

Project.create!(name: "Project 1", user_id: User.first.id, desc: "This is a description of project 1", framework_1: "React", framework_2: "Ruby on Rails", framework_3: "PostgreSQL", framework_4: "HTML", framework_5: "CSS", link: "")

Employer.create!(name: "Employer 1", user_id: User.first.id, location: "Location 1", role: "Role 1", time_employed: "Time Employed 1", desc_1: "Description 1", desc_2: "Description 2", desc_3: "Description 3", desc_4: "Description 4", desc_5: "Description 5")
