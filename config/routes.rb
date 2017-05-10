Rails.application.routes.draw do

  devise_for :users

  namespace :api do
  	resources :shirts
  	resources :comments
  	resources :users
  end


 get 'about' => 'static_pages#about'
 get 'contact' => 'static_pages#contact'


  root to: 'client#index'
  get '*path', to: 'client#index'
end
