class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.where("id IN (?)", params["category"].map(&:to_i))
        render 'api/categories/index'
    end

    def show
        @category = Category.find(params[:id])
        render 'api/categories/show'
    end

    def category_params
        params.require(:category).permit(:id)
    end
end
