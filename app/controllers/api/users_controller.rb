class Api::UsersController < ApplicationController
    def index
        @users = User.includes(:reviews, :saved_businesses).where("id IN (?)", params["user"].map(&:to_i))
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create

        @user = User.new(user_params)
        if @user.save
            @user.user_photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', "profile_basic2.png")), filename: ("user_#{@user.id}.png"))
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find_by(id: params[:id])
        if @user.destroy
            logout
            render :index
        else
            render json: ['The user id is not correct. The user with the id does not exist.'], status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :firstname, :lastname, :zipcode, :birthday, :user_photo)
    end
end
