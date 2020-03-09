class Api::BusinessesController < ApplicationController

    def index
        @businesses = Business.includes(:hours, :categories, :reviews, :users_who_saved, :review_authors).all
        render 'api/businesses/index'
    end

    def show
        @business = Business.includes(:hours, :categories, :reviews, :users_who_saved).find(params[:id])
        render 'api/businesses/show'
    end

    
end
