class Api::BusinessesController < ApplicationController

    def index
        # debugger
        # @search_terms = Business.search_term_generator
        @businesses = Business.includes(:hours, :categories, :reviews, :users_who_saved, :review_authors).all

        @business_list = @businesses.map(&:business_name)
        @category_list = @businesses.inject([]){|sum, business| business.categories + sum }.map(&:name).uniq
        # @benches = Bench.in_bounds(params[:bounds])
        
        render 'api/businesses/index'
    end

    def show
        @businesses = Business.includes(:hours, :categories, :reviews, :users_who_saved, :review_authors).all
        @business_list = @businesses.map(&:business_name)
        @category_list = @businesses.inject([]){|sum, business| business.categories + sum }.map(&:name).uniq
        @business = Business.includes(:hours, :categories, :reviews, :users_who_saved).find(params[:id])

        render 'api/businesses/show'
    end

    
end
