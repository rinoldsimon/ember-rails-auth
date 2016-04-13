Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: 'sessions' }

  resources :comments, except: [:new, :edit]
  resources :posts, except: [:new, :edit]

end
