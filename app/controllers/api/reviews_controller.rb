class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where("id IN (?)", params["review"].map(&:to_i)).order('review_date DESC')

        render 'api/reviews/index'
    end

    def show
        @review = Review.find(params[:id])
        render 'api/reviews/show'
    end

    def create
        cur_review = {
            author_id: review_params[:author_id].to_i, 
            business_id: review_params[:business_id].to_i, 
            business_name: review_params[:business_name], 
            rating: review_params[:rating], 
            text: review_params[:text],
            review_date: Time.at(review_params[:review_date].to_f/1000.0), 
            useful: 0, 
            funny: 0, 
            cool: 0
        }
        @review = Review.new(cur_review)
        if @review.save
            render 'api/reviews/show'
        else
            render json: ['The parameters for creating a review are incorrect.'], status: 401
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
            render 'api/reviews/show'
        else
            render json: ['The parameter for finding a review is not correct.'], status: 401
        end
    end

    def review_params
        params.require(:review).permit(:author_id, :business_id, :business_name, :rating, :text, :review_date, :useful, :funny, :cool, :review_photo)
    end
end