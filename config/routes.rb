Rails.application.routes.draw do

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :appointments
  resources :clients
  resources :trainers
  
  get "/me", to: "trainers#show"
  post "/signup", to: "trainers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
