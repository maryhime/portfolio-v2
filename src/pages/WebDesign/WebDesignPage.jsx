import React, { Fragment } from 'react'
import { MainHeaderComponent } from '../../components/general/MainHeaderComponent'
import { WebDesignCardComponent } from '../../components/general/WebDesignCardComponent'
import { WEB_DESIGN } from '../../utils/data'
import { CardContainerComponent } from '../../components/general/CardContainerComponent'

const WebDesignPage = () => {
  return (
    <div className="flex flex-col phone-lg:flex-row laptop:gap-48 laptop-lg:gap-64 w-full ">

      <div className='flex flex-col gap-64 '>
        <MainHeaderComponent
          title={'Web Design & Development'}
          subtitle={'Website Pages and applications that I have created during the course of my career and free time.'}
        />


        <div className="desktop:flex laptop:flex-col laptop:gap-48 hidden">
          {WEB_DESIGN.slice(0, 5).map((value, index) =>
            <CardContainerComponent
              key={index}
              style={'hover:text-primary-500'}
            >
              <WebDesignCardComponent
                title={value.title}
                category={value.desc}
                image={value.image}
                link={value.link}
              />
            </CardContainerComponent>

          )}
        </div>

        {/* laptop */}
        <div className="laptop:flex laptop:flex-col laptop:gap-48 hidden desktop:hidden">
          {WEB_DESIGN.slice(0, 8).map((value, index) =>
            <CardContainerComponent key={index}>
              <WebDesignCardComponent
                title={value.title}
                category={value.desc}
                image={value.image}
                link={value.link}
              />
            </CardContainerComponent>

          )}
        </div>

        {/* mobile */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-24 laptop:hidden">
          {WEB_DESIGN.map((value, index) =>
            <CardContainerComponent
              key={index}
              style={'hover:text-primary-500'}>
              <WebDesignCardComponent
                title={value.title}
                category={value.desc}
                image={value.image}
                link={value.link}
              />
            </CardContainerComponent>
          )}
        </div>

      </div>

      {/* laptop */}
      <div className=" hidden laptop:flex laptop:flex-col laptop:gap-48 desktop:hidden">
        {WEB_DESIGN.slice(8, 15).map((value, index) =>
          <CardContainerComponent
            key={index}
            style={'hover:text-primary-500'}
          >
            <WebDesignCardComponent
              title={value.title}
              category={value.desc}
              image={value.image}
              link={value.link}
            />
          </CardContainerComponent>
        )}
      </div>

      {/* desktop */}
      <div className=" hidden desktop:flex desktop:flex-col desktop:gap-48">
        {WEB_DESIGN.slice(5, 10).map((value, index) =>
          <CardContainerComponent
            key={index}
            style={'hover:text-primary-500'}>
            <WebDesignCardComponent
              title={value.title}
              category={value.desc}
              image={value.image}
              link={value.link}
            />
          </CardContainerComponent>
        )}
      </div>
      <div className=" hidden desktop:flex desktop:flex-col desktop:gap-48">
        {WEB_DESIGN.slice(10, 15).map((value, index) =>
          <CardContainerComponent 
          key={index}
          style={'hover:text-primary-500'}
          >
            <WebDesignCardComponent
              title={value.title}
              category={value.desc}
              image={value.image}
              link={value.link}
            />
          </CardContainerComponent>
        )}
      </div>

    </div>

  )
}

export default WebDesignPage