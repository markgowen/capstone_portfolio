class FallbackController < ActionController::Base
  def index
    # React app index page
    render file: "pages/index.html"
  end
end
