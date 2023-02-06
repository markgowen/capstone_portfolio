class EmployersController < ApplicationController
  def index
    render json Employer.all
  end

  def show
    render json: @employer
  end

  def create
    employer = Employer.create!(employer_params)
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

  def employer_params
    params.permit(:name, :location, :role, :time_employed, :desc_1, :desc_2, :desc_3, :desc_4, :desc_5)
  end
end
