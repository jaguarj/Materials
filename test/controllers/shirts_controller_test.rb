require 'test_helper'

class ShirtsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get shirts_index_url
    assert_response :success
  end

  test "should get new" do
    get shirts_new_url
    assert_response :success
  end

  test "should get show" do
    get shirts_show_url
    assert_response :success
  end

  test "should get edit" do
    get shirts_edit_url
    assert_response :success
  end

end
