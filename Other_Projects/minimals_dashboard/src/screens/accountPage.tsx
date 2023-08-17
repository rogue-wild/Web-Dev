import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import Typography from "../components/typography/typography";
import { FaFileImage } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Card from "../styles/card";
import { colors } from "../styles/colors";

interface FormData {
  name: string;
  email: string;
}

const DashViewWrapper = styled.div`
  margin: 3rem 1rem 0rem 7rem;
  @media (max-width: 1100px) {
    margin: 4rem 1rem 0rem 2rem;
  }
  @media (max-width: 500px) {
    margin: 3.5rem 1rem 0rem 1rem;
  }
`;

const AboveText = styled.div`
  line-height: 0rem;
`;

const DashList = styled.ul`
  display: inline-flex;
  margin-left: -2rem;
`;

const DashListLi = styled.li`
  color: grey;
  list-style-position: inside;
  padding-left: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: rgb(0, 0, 0);

  &:hover {
    color: rgb(0, 0, 0);
    text-decoration: underline;
  }
`;

const AppCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  width: 85vw;
  @media (max-width: 600px) {
    margin: 5rem 0rem 2rem 3rem;
  }
  @media (max-width: 1100px) {
    display: block;
    margin-left: 3rem;
  }
`;

const Card1 = styled(Card)`
  width: 20vw;
  @media (max-width: 1100px) {
    width: 80vw;
    margin: 0rem 1rem 1rem 0rem;
  }
  @media (max-width: 600px) {
    width: 80vw;
    margin: 0rem 1rem 1rem -2rem;
  }
`;

const Card2 = styled(Card)`
  margin-left: 0.4rem;
  width: 60vw;
  @media (max-width: 1100px) {
    width: 80vw;
    margin: 0rem 1rem 0rem 0rem;
  }
  @media (max-width: 600px) {
    width: 80vw;
    margin: 0rem 1rem 0rem -2rem;
  }
`;

const Tab = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 20px;
  transition: 0.3s;
  color: rgb(117, 117, 117);
  font-size: 1rem;
  border-bottom: #ffffff 5px solid;

  &:hover {
    color: #444444;
    background-color: #fdfdfd;
    border-bottom: #444444 3px solid;
  }
`;

const ProfileUpdate = styled.div`
  display: block;
`;

const UpdatePic = styled(Typography)`
  visibility: hidden;
  justify-content: center;
  opacity: 0;
  position: absolute;
  transform: translate(5.3vw, -26.5vh);
  background-color: rgba(114, 114, 114, 0.679);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: 2rem;
  font-size: 0.8rem;
  overflow: hidden;
  text-align: center;
  transition: opacity 0.3s, visibility 0.3s;
  cursor: pointer;
  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

const ProfilePic = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  margin: 2rem 0rem 1rem 0rem;
  border: #f4f4f4 5px double;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:hover + ${UpdatePic} {
    visibility: visible;
    opacity: 1;
  }
`;

const Form = styled.form`
  display: grid;
  grid-gap: 1rem 0rem;
  justify-content: space-evenly;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    display: block;
  }
  margin-bottom: 2rem;
`;

const FormField = styled.div`
  width: 25vw;
  margin: 1rem 0rem -1rem 1rem;
  text-align: center;
  &:focus-within label {
    color: black;
  }
  @media (max-width: 600px) {
    display: block;
    margin: 0rem 0rem 0rem 1rem;
  }
`;

const Label = styled.label`
  float: left;
  font-size: 0.8rem;
  font-weight: 600;
  color: grey;
  margin-bottom: -0.5rem;
  z-index: 2;
  position: relative;
  background-color: white;
  margin-left: 1rem;
  padding: 0 0.2rem;
  transition: 0.3s;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 25vw;
  height: 5vh;
  @media (max-width: 1100px) {
    width: 32vw;
    margin: 0rem 0rem 0rem 0rem;
  }
  @media (max-width: 600px) {
    display: block;
    margin: 1rem 1rem 1rem 0rem;
    width: 70vw;
  }
`;

const TextArea = styled.textarea`
  overflow: hidden;
  resize: none;
  width: 56vw;
  height: 4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.8rem 0rem 0rem 0.5rem;
  font-family: "Public Sans", sans-serif;
  overflow: hidden;
  margin-bottom: 5rem;
  @media (max-width: 1100px) {
    width: 74vw;
    margin: 0rem 1rem 8rem 0rem;
  }
  @media (max-width: 600px) {
    margin: 0.5rem 1rem 5rem 0rem;
    font-size: 0.8rem;
    width: 72vw;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 26.5vw;
  height: 8vh;
  @media (max-width: 1100px) {
    width: 34.5vw;
    margin: 0rem 1rem 1rem 0rem;
  }
  @media (max-width: 600px) {
    display: block;
    margin: 1rem 1rem 1rem 0rem;
    width: 73vw;
    height: 10vh;
  }
`;

const PostBtn = styled.button`
  :root {
    --reference-width: 100px;
  }
  .reference-element {
    width: var(--reference-width);
  }
  border-radius: 10px;
  position: relative;
  margin: 0.7rem 1rem 1rem 1rem;
  left: calc(80% - var(--reference-width));
  top: 7rem;
  padding: 0.7rem;
  width: 8rem;
  height: 3rem;
  background-color: rgb(53, 53, 54);
  color: ${colors.text.primary};
  font-size: 1rem;
  border: none;
  &:hover {
    transition: 0.3s;
    background-color: rgb(73, 73, 74);
  }
  @media (max-width: 1100px) {
    margin: 0.7rem 2rem 0rem 0rem;
  }
  @media (max-width: 1000px) {
    margin: 0.7rem 1rem 0rem 0rem;
  }
  @media (max-width: 600px) {
    left: calc(60% - var(--reference-width));
    top: -2rem;
    font-size: 0.8rem;
    font-size: 0.8rem;
  }
`;

const DelBtn = styled.button`
  border-radius: 10px;
  margin: 0.7rem 1rem 1rem 1rem;
  padding: 0.7rem;
  background-color: rgb(255, 239, 239);
  color: #aa0000;
  font-size: 0.8rem;
  font-weight: 600;
  border: none;
  &:hover {
    transition: 0.3s;
    background-color: rgb(255, 200, 200);
  }
  @media (max-width: 1100px) {
    margin: -4rem 2rem 0rem 0rem;
  }
  @media (max-width: 1000px) {
    margin: -4rem 1rem 0rem 0rem;
  }
  @media (max-width: 600px) {
    margin: -4rem 1rem 0rem 0rem;
    font-size: 0.8rem;
    font-size: 0.8rem;
  }
`;

const SwitchLabel = styled.label`
  display: inline-block;
  height: 1.2rem;
  position: relative;
  width: 2rem;
  margin: 0.8rem 0rem 2rem 0.5rem;
  @media (max-width: 511px) {
    margin: 0.5rem 0rem 2rem 1rem;
  }
`;

const Slider = styled.span`
  padding: 2px;
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: -2px;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: 0.4s;
  border-radius: 34px;
  bottom: 0px;
  &:before {
    background-color: #fff;
    content: "";
    height: 1rem;
    left: 2px;
    right: -1px;
    position: absolute;
    transition: 0.4s;
    width: 1rem;
    border-radius: 50%;
  }
`;

const SwitchInput = styled.input`
  display: none;

  &:checked + ${Slider} {
    background-color: #66bb6a;
  }

  &:checked + ${Slider}:before {
    transform: translateX(0.9rem);
  }
`;

const SliderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function AccountPage() {
  const { t } = useTranslation();

  const initialFormData: FormData = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  function validateForm() {
    let errors: Record<string, string> = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      errors.name = "Name is required";
    }

    if (!formData.email) {
      isValid = false;
      errors.email = "Email is required";
    }

    setFormErrors(errors);
    return isValid;
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (validateForm()) {
      alert("Save success!");
    }
  }

  return (
    <DashViewWrapper>
      <AboveText>
        <Typography variant="h4">{t("account")}</Typography>
        <Typography variant="subheading1">
          <Link href="#dash">{t("dashboard")}</Link>
          <DashList>
            <DashListLi>
              <Link href="#user">{t("user")}</Link>
            </DashListLi>
            <DashListLi>{t("account")}</DashListLi>
          </DashList>
        </Typography>
      </AboveText>
      <Tab>
        <TabButton>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 -2 25 19"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4Zm3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2Z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            General
          </span>
        </TabButton>
      </Tab>
      <AppCard>
        <Card1>
          <ProfileUpdate>
            <ProfilePic
              alt="Jaydon Frankie"
              src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
            ></ProfilePic>
            <UpdatePic variant="text2">
              <FaFileImage />
              Update Photo
            </UpdatePic>
          </ProfileUpdate>
          <Typography variant="text2">
            Allowed *.jpeg, *.jpg, *.png, *.gif
          </Typography>
          <Typography variant="text2">max size of 3.1 MB</Typography>
          <SliderDiv>
            <Typography variant="text1">Public Profile </Typography>
            <SwitchLabel htmlFor="checkbox">
              <SwitchInput type="checkbox" id="checkbox" />
              <Slider></Slider>
            </SwitchLabel>
          </SliderDiv>
          <DelBtn>Delete User</DelBtn>
        </Card1>
        <Card2>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && <p className="error">{formErrors.name}</p>}
            </FormField>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <p className="error">{formErrors.email}</p>}
            </FormField>
            <FormField>
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" name="phone" />
            </FormField>
            <FormField>
              <Label htmlFor="address">Address</Label>
              <Input type="text" id="address" name="address" />
            </FormField>
            <FormField>
              <Label htmlFor="country">Country</Label>
              <Select id="country" name="country">
                <option value="  " selected>
                  Select a country
                </option>
                <option value="--">Not Specified</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegowina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">
                  Congo, the Democratic Republic of the
                </option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote d'Ivoire</option>
                <option value="HR">Croatia (Hrvatska)</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="TP">East Timor</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="FX">France, Metropolitan</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard and Mc Donald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran (Islamic Republic of)</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People's Republic of
                </option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macau</option>
                <option value="MK">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint LUCIA</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia (Slovak Republic)</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SH">St. Helena</option>
                <option value="PM">St. Pierre and Miquelon</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen Islands</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands (British)</option>
                <option value="VI">Virgin Islands (U.S.)</option>
                <option value="WF">Wallis and Futuna Islands</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="YU">Yugoslavia</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </Select>
            </FormField>
            <FormField>
              <Label htmlFor="state">State/Region</Label>
              <Input type="text" id="state" name="state" />
            </FormField>
            <FormField>
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" name="city" />
            </FormField>
            <FormField>
              <Label htmlFor="zip">Zip/Code</Label>
              <Input type="number" id="zip" name="zip" />
            </FormField>
            <FormField>
              <Label htmlFor="about">About</Label>
              <TextArea id="about" name="about" />
            </FormField>
            <PostBtn type="submit">{t("save")}</PostBtn>
          </Form>
        </Card2>
      </AppCard>
    </DashViewWrapper>
  );
}

export default AccountPage;
