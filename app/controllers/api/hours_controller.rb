class Api::HoursController < ApplicationController
    def index
        @hours = Hour.all
        render 'api/hours/index'
    end

    def show
        @hour = Hour.find(params[:id])
        render 'api/hours/show'
    end
end
