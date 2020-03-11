class Api::BusinessesController < ApplicationController

    def index
        @businesses = Business.includes(:hours, :categories, :reviews, :users_who_saved, :review_authors).all
        @business_list = @businesses.map(&:business_name)
        @category_list = @businesses.inject([]){|sum, business| business.categories + sum }.map(&:name).uniq
        @businesses = []
        
        # "name LIKE ? OR postal_code LIKE ?", "%#{search}%", "%#{search}%"
        @businesses += Business.where("business_name LIKE ?", "%#{params[:bounds][:text]}%")
        @businesses += Business.joins(:categories).where( '(categories.name LIKE ?)', "%#{params[:bounds][:text]}%")
        @businesses = @businesses[0..31]

        # search_result += Business.where( '(business_name LIKE ?) AND ', keyword )
        # Business.where('(lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ?)', bounds[:southWest][:lat].to_f, bounds[:northEast][:lat].to_f, bounds[:southWest][:lng].to_f, bounds[:northEast][:lng].to_f)
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

    def business_params
        params.require(:bounds).permit(:text)
    end

    
end
