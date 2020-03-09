class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where("id IN (?)", params["review"].map(&:to_i))
        render 'api/reviews/index'
    end

    def show
        @review = Review.find(params[:id])
        render 'api/reviews/show'
    end

    def review_params
        params.require(:review).permit(:id)
    end
end
