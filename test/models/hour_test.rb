# == Schema Information
#
# Table name: hours
#
#  id           :bigint           not null, primary key
#  is_overnight :boolean
#  start        :string
#  end          :string
#  day          :integer
#  business_id  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class HourTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
