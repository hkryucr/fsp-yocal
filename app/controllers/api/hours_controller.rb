class Api::HoursController < ApplicationController
    def index
        @hours = Hour.where("id IN (?)", params["hour"].map(&:to_i))
        render 'api/hours/index'
    end

    def show
        @hour = Hour.find(params[:id])
        render 'api/hours/show'
    end

    def hour_params
        params.require(:hour).permit(:id)
    end
end
