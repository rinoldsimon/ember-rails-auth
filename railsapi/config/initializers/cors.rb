# Be sure to restart your server when you modify this file.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests
Rails.application.config.middleware.insert_before 0, "Rack::Cors" do
  allow do
    origins '*'
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
      #methods: [:get, :post, :put, :delete, :options]
  end
end
