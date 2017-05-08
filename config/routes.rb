Rails.application.routes.draw do

  devise_for :users

  namespace :api do
  	resources :shirts
  	resources :comments
  end




  root to: 'client#index'
  get '*path', to: 'client#index'
end
