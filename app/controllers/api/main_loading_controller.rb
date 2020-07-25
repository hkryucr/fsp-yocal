class Api::MainLoadingController < ApplicationController
    def index
        @businesses = Business.includes(:hours, :categories, :reviews, :users_who_saved, :review_authors).all
        @business_list = @businesses.map(&:business_name)        
        @category_list = @businesses.inject([]){|sum, business| business.categories + sum }.map(&:name).uniq
        @businesses = @businesses[0..10]
        render 'api/businesses/index'
    end
end
