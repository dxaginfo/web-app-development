import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    productType: '',
    targetAudience: [],
    budget: 5000,
    channels: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAudienceChange = (value) => {
    const currentAudience = [...formData.targetAudience];
    if (currentAudience.includes(value)) {
      setFormData({
        ...formData, 
        targetAudience: currentAudience.filter(item => item !== value)
      });
    } else {
      setFormData({
        ...formData,
        targetAudience: [...currentAudience, value]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="input-form-container">
      <h2>Tell us about your brand</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>What type of product/service do you offer?</label>
          <select name="productType" value={formData.productType} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="sports-team">Sports Team</option>
            <option value="entertainment-brand">Entertainment Brand</option>
            <option value="media-company">Media Company</option>
            <option value="consumer-product">Consumer Product</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Who is your target audience?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={formData.targetAudience.includes('families')}
                onChange={() => handleAudienceChange('families')}
              />
              Families
            </label>
            <label>
              <input
                type="checkbox"
                checked={formData.targetAudience.includes('young-adults')}
                onChange={() => handleAudienceChange('young-adults')}
              />
              Young Adults (18-35)
            </label>
            <label>
              <input
                type="checkbox"
                checked={formData.targetAudience.includes('die-hard-fans')}
                onChange={() => handleAudienceChange('die-hard-fans')}
              />
              Die-hard Fans
            </label>
            <label>
              <input
                type="checkbox"
                checked={formData.targetAudience.includes('casual-fans')}
                onChange={() => handleAudienceChange('casual-fans')}
              />
              Casual Fans
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>What is your approximate budget for engagement initiatives? ${formData.budget.toLocaleString()}</label>
          <input
            type="range"
            name="budget"
            min="1000"
            max="100000"
            step="1000"
            value={formData.budget}
            onChange={handleChange}
          />
          <div className="range-labels">
            <span>$1,000</span>
            <span>$100,000+</span>
          </div>
        </div>

        <button type="submit" className="generate-button">Generate Ideas</button>
      </form>
    </div>
  );
}

export default InputForm;