module Cardboard
  class Template < ActiveRecord::Base

    serialize :fields, Hash

    has_many :pages, dependent: :destroy

    validates :identifier, uniqueness: {:case_sensitive => false}, :format => { :with => /\A[a-z\_0-9]+\z/,
                           :message => "Only downcase letters, numbers and underscores are allowed" }
    
    after_save :reload_routes
    def reload_routes
      DynamicRouter.reload
    end

    def name
      self[:name] || self.identifier
    end
  end
end
