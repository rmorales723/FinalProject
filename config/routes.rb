Rails.application.routes.draw do
  

  resources :appointments
  resources :clients
  resources :trainers
  get "/me", to: "trainers#show"
  post "/", to: "trainers#create"
  post "/", to: "sessions#create"
  delete "/", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
