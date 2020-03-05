# == Schema Information
#
# Table name: categorizings
#
#  id          :bigint           not null, primary key
#  business_id :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class CategorizingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
