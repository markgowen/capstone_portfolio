class EmployersController < ApplicationController
  before_action :set_employer, only: [:show, :update, :destroy]
  skip_before_action :authorize, only: [:index, :show]

  def index
    render json: Employer.all
  end

  def show
    render json: @employer
  end

  def create
    user = User.find(session[:user_id])
    employer = user.employers.create!(employer_params)
    render json: employer, status: :created
  end

  def update
    @employer.update!(employer_params)
    render json: @employer, status: :accepted
  end

  def destroy
    @employer.destroy
    head :no_content
  end

  private

  def set_employer
    @employer = Employer.find(params[:id])
  end

  def employer_params
    params.permit(:name, :location, :role, :time_employed, :desc_1, :desc_2, :desc_3, :desc_4, :desc_5)
  end
end
