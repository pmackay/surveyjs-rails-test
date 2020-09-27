class AddFormToSurvey < ActiveRecord::Migration[5.2]
  def change
    add_column :surveys, :form, :text
  end
end
