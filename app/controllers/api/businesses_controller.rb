class Api::BusinessesController < ApplicationController

    def index
        @businesses = Business.includes(:hours, :categories, :reviews, :users_who_saved, :review_authors).all
        @business_list = @businesses.map(&:business_name)
        @category_list = @businesses.inject([]){|sum, business| business.categories + sum }.map(&:name).uniq
        @businesses = []
        
        bounds = params[:data][:bounds]
        underscored_params = business_params[:text].split(" ").join("_")

        @businesses += Business
        .where('latitude < ?', bounds[:northEast][:lat].to_f)
        .where('latitude >?', bounds[:southWest][:lat].to_f)
        .where('longitude < ?', bounds[:northEast][:lng].to_f)
        .where('longitude > ?', bounds[:southWest][:lng].to_f)
        .where('(lower(business_name) LIKE ?)', "%#{underscored_params.downcase}%")

        @businesses += Business.joins(:categories)
        .where( '(lower(categories.name) LIKE ?)', "%#{params[:data][:text].downcase}%")
        .where('latitude < ?', bounds[:northEast][:lat].to_f)
        .where('latitude >?', bounds[:southWest][:lat].to_f)
        .where('longitude < ?', bounds[:northEast][:lng].to_f)
        .where('longitude > ?', bounds[:southWest][:lng].to_f)

        @businesses = @businesses[0..31]
        
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
        params.require(:data).permit(:text, :bounds)
    end

    
end
