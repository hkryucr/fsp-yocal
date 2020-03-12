Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html 

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:show, :index]
    resources :reviews, only: [:show, :index, :create]
    resources :hours, only: [:show, :index]
    resources :categories, only: [:show, :index]

  end

  root to: 'static_pages#root'
end
