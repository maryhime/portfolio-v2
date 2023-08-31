import React from 'react'
import { MainHeaderComponent } from '../components/general/MainHeaderComponent'
import { CardContainerComponent } from '../components/general/CardContainerComponent'
import { ILLUSTRATION } from '../utils/data'
import { IllustrationCardComponent } from '../components/general/IllustrationCardComponent'

const IllustrationPage = () => {
  return (

    <div className="flex flex-col phone-lg:flex-row laptop:gap-48 laptop-lg:gap-64 w-full ">
      <div className='flex flex-col gap-64 w-full'>
        <MainHeaderComponent
          title={'Digital Illustration'}
          subtitle={'Website Pages and applications that I have created during the course of my career and free time.'} />
        <div className="desktop:flex laptop:flex-col laptop:gap-48 hidden">
          {ILLUSTRATION.slice(0, 5).map((value, index) =>
            <CardContainerComponent
              key={index}
              style={'hover:text-primary-500 pb-24'}>
              <IllustrationCardComponent
                title={value.title}
                image={value.image}
                date={value.date}
              />
            </CardContainerComponent>
          )}
        </div>
        {/* laptop */}
        <div className="laptop:flex laptop:flex-col laptop:gap-48 hidden desktop:hidden">
          {ILLUSTRATION.slice(0, 6).map((value, index) =>
            <CardContainerComponent
              key={index}
              style={'hover:text-primary-500 pb-24'}>
              <IllustrationCardComponent
                title={value.title}
                image={value.image}
                date={value.date}
              />
            </CardContainerComponent>
          )}
        </div>
        {/* mobile */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-24 laptop:hidden">
          {ILLUSTRATION.map((value, index) =>
            <CardContainerComponent
              key={index}
              style={'hover:text-primary-500 pb-24'}>
              <IllustrationCardComponent
                title={value.title}
                image={value.image}
                date={value.date}
              />
            </CardContainerComponent>
          )}
        </div>

      </div>
      {/* laptop */}
      <div className=" hidden laptop:flex laptop:flex-col laptop:gap-48 desktop:hidden w-full">
        {ILLUSTRATION.slice(6, 13).map((value, index) =>
          <CardContainerComponent
            key={index}
            style={'hover:text-primary-500 pb-24'}>
            <IllustrationCardComponent
              title={value.title}
              image={value.image}
              date={value.date}
            />
          </CardContainerComponent>
        )}
      </div>

      {/* desktop */}
      <div className=" hidden desktop:flex desktop:flex-col desktop:gap-48 w-full">
        {ILLUSTRATION.slice(4, 9).map((value, index) =>
          <CardContainerComponent
            key={index}
            style={'hover:text-primary-500 pb-24'}>
            <IllustrationCardComponent
              title={value.title}
              image={value.image}
              date={value.date}
            />
          </CardContainerComponent>
        )}
      </div>
      <div className=" hidden desktop:flex desktop:flex-col desktop:gap-48 w-full">
        {ILLUSTRATION.slice(9, 13).map((value, index) =>
          <CardContainerComponent
            key={index}
            style={'hover:text-primary-500 pb-24'}>
            <IllustrationCardComponent
              title={value.title}
              image={value.image}
              date={value.date}
            />
          </CardContainerComponent>
        )}
      </div>

    </div>

  )
}

export default IllustrationPage