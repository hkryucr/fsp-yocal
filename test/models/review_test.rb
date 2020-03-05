# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  author_id     :integer          not null
#  business_id   :integer          not null
#  business_name :string           not null
#  rating        :string
#  text          :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
