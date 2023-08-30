import React from 'react'
import { MainHeaderComponent } from '../components/general/MainHeaderComponent'
import { CardContainerComponent } from '../components/general/CardContainerComponent'
import { CaseStudyCardComponent } from '../components/general/CaseStudyCardComponent'
import { CASE_STUDIES } from '../utils/data'

const CaseStudiesPage = () => {
  return (
    <div className="flex flex-col laptop:gap-48 laptop-lg:gap-64 w-full ">
      <MainHeaderComponent
        title={'Case Studies'}
        subtitle={'Case Studies that I worked on during my free time to show my workflow, design process, and how I solve problems.'} />

      <div className="grid grid-cols-2 gap-24">
        {CASE_STUDIES.map((value, index) =>
          <CardContainerComponent key={index}>
            <CaseStudyCardComponent
              title={value.title}
              category={value.category}
              link={value.link}
              image={value.image}
              desc={value.desc}
            />
          </CardContainerComponent>
        )}

      </div>



    </div>
  )
}

export default CaseStudiesPage