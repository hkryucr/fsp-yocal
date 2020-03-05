# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  business_name :string           not null
#  url           :text
#  latitude      :float            not null
#  longitude     :float            not null
#  phone         :string
#  price         :string
#  rating        :string           not null
#  zipcode       :string           not null
#  country       :string           not null
#  state         :string           not null
#  city          :string           not null
#  address1      :string           not null
#  address2      :string
#  address3      :string
#  is_claimed    :boolean          not null
#  is_closed     :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  review_count  :integer
#
require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
