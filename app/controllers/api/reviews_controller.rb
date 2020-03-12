class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where("id IN (?)", params["review"].map(&:to_i))
        render 'api/reviews/index'
    end

    def show
        @review = Review.find(params[:id])
        render 'api/reviews/show'
    end

    def create
        input = {
            author_id: params[:review][:business_id].to_i, 
            business_id: params[:review][:business_id].to_i, 
            business_name: params[:review][:business_name], 
            rating: params[:review][:rating], 
            text: params[:review][:text],
            review_date: params[:review][:review_date], 
            useful: 0, 
            funny: 0, 
            cool: 0
        }
        @review = Review.new(input)

        if @review.save
            render 'api/reviews/show'
        else
            render json: ['The parameters for creating a review are incorrect.'], status: 401
        end
    end

    def review_params
        params.require(:review).permit(:author_id, :business_id, :business_name, :rating, :text, :review_date, :useful, :funny, :cool)
    end
end