Rails.application.routes.draw do

  devise_for :users

  namespace :api do
	resources :shirts
  	resources :comments
  	resources :users
  end


  # get 'static_pages/about'
  # binding.pry
  # get 'static_pages/contact'

  get '/about',   to: 'static_pages#about'
  get '/contact', to: 'static_pages#contact'

  root to: 'client#index'
  get '*path', to: 'client#index'
end
