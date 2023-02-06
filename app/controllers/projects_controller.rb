class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy]
#   skip_before_action :authorize, only: [:index, :show]

  def index
    render json Project.all
  end

  def show
    render json: @project
  end

  def create
    project = Project.create!(project_params)
    render json: project, status: :created
  end

  def update
    @project.update!(project_params)
    render json: @project, status: :accepted
  end

  def destroy
    @project.destroy
    head :no_content
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.permit(:name, :description, :framework_1, :framework_2, :framework_3, :framework_4, :framework_5, :link)
  end
end
