class Api::BusinessesController < ApplicationController

    def index
        @businesses = Business.includes(:hours, :categories, :reviews, :users_who_saved, :review_authors).all.limit(30)
        # debugger
        # Levenshtein.normalized_distance string1, string2, threshold

        render 'api/businesses/index'
    end

    def show
        @business = Business.includes(:hours, :categories, :reviews, :users_who_saved).find(params[:id])
        render 'api/businesses/show'
    end

    
end
