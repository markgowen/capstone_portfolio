Rails.application.routes.draw do
  resources :projects
  resources :employers
  resources :users, only: [:show]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
