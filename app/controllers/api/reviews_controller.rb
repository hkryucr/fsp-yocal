class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render 'api/reviews/index'
    end

    def show
        @review = Review.find(params[:id])
        render 'api/reviews/show'
    end
end
